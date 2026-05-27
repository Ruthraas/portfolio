export const starVertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uScroll;
  attribute float aSize;
  attribute float aDepth;
  varying float vAlpha;
  varying float vDepth;

  // The star layer is intentionally simple: each point drifts at a different
  // depth, with the camera-like scroll value pushing the field very slowly.
  void main() {
    vec3 pos = position;
    float depthMotion = aDepth * 0.28;
    pos.z += uScroll * depthMotion;
    pos.x += (uPointer.x - 0.5) * aDepth * 0.18;
    pos.y += (uPointer.y - 0.5) * aDepth * 0.12;
    pos.x += sin(uTime * 0.08 + position.z * 0.3) * 0.025 * aDepth;
    pos.y += cos(uTime * 0.07 + position.x * 0.24) * 0.018 * aDepth;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (165.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    vDepth = aDepth;
    vAlpha = smoothstep(18.0, 2.0, abs(position.z));
  }
`;

export const starFragmentShader = `
  varying float vAlpha;
  varying float vDepth;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float d = length(center);
    float dot = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.16, 0.0, d);
    vec3 color = mix(vec3(0.52, 0.56, 0.62), vec3(0.94, 0.91, 0.84), vDepth);
    float alpha = (dot * 0.34 + core * 0.36) * vAlpha;
    gl_FragColor = vec4(color, alpha);
  }
`;

export const veilVertexShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float wave = sin(pos.x * 2.1 + uTime * 0.09) + cos(pos.y * 2.8 - uTime * 0.07);
    float pointer = smoothstep(0.62, 0.0, distance(uv, uPointer));
    vWave = wave * 0.5 + pointer;
    pos.z += wave * 0.025 + pointer * 0.035;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const veilFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    float left = smoothstep(0.8, 0.0, distance(vUv, vec2(0.18, 0.44)));
    float right = smoothstep(0.84, 0.0, distance(vUv, vec2(0.84, 0.22)));
    float horizon = smoothstep(0.0, 0.9, vUv.y) * smoothstep(1.0, 0.1, vUv.y);
    float grain = random(vUv * 240.0 + uTime * 0.02) * 0.018;
    vec3 color = vec3(0.035, 0.035, 0.038);
    color += left * vec3(0.11, 0.10, 0.085);
    color += right * vec3(0.055, 0.065, 0.08);
    color += vWave * 0.012 + grain;
    float alpha = 0.34 * horizon;
    gl_FragColor = vec4(color, alpha);
  }
`;
