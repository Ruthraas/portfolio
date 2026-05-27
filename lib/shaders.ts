export const ambientVertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  varying vec2 vUv;
  varying float vElevation;

  // A dense plane becomes a quiet atmospheric surface. The motion is slow and
  // interpolated so it reads as cinematic lighting instead of a loud 3D effect.
  void main() {
    vUv = uv;
    vec3 pos = position;
    float pointerDistance = distance(uv, uPointer);
    float waveA = sin(pos.x * 2.8 + uTime * 0.34);
    float waveB = cos(pos.y * 3.6 - uTime * 0.28);
    float waveC = sin((pos.x + pos.y) * 4.2 + uTime * 0.18);
    vElevation = (waveA + waveB + waveC) * 0.08;
    pos.z += vElevation + smoothstep(0.55, 0.0, pointerDistance) * 0.18;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const ambientFragmentShader = `
  uniform float uTime;
  uniform vec3 uInk;
  uniform vec3 uMist;
  uniform vec3 uWarm;
  varying vec2 vUv;
  varying float vElevation;

  float grain(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    float leftGlow = smoothstep(0.9, 0.0, distance(vUv, vec2(0.22, 0.48)));
    float rightGlow = smoothstep(0.72, 0.0, distance(vUv, vec2(0.74, 0.35)));
    float pulse = 0.5 + 0.5 * sin(uTime * 0.22 + vUv.x * 2.0);
    vec3 color = uInk;
    color = mix(color, uWarm, leftGlow * 0.32);
    color = mix(color, uMist, rightGlow * 0.24);
    color += vElevation * 0.18;
    color += grain(vUv * 360.0 + uTime * 0.12) * 0.018;
    float alpha = 0.42 + pulse * 0.06;
    gl_FragColor = vec4(color, alpha);
  }
`;

export const particleVertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  attribute float aSize;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    pos.x += sin(uTime * 0.2 + position.y * 0.4) * 0.045 + (uPointer.x - 0.5) * 0.12;
    pos.y += cos(uTime * 0.18 + position.x * 0.36) * 0.035 + (uPointer.y - 0.5) * 0.08;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (180.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    vAlpha = smoothstep(7.5, 1.2, length(position));
  }
`;

export const particleFragmentShader = `
  varying float vAlpha;

  void main() {
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    float glow = smoothstep(0.5, 0.0, d);
    vec3 color = vec3(0.84, 0.80, 0.68);
    gl_FragColor = vec4(color, glow * vAlpha * 0.42);
  }
`;
