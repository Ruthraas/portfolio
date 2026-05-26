export const fluidVertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying float vWave;

  // The hero field bends a dense plane with layered sine waves. It is cheap
  // enough for mobile because the expensive look comes from interpolation.
  void main() {
    vUv = uv;
    vec3 pos = position;
    float mousePull = distance(uv, uMouse);
    float waveA = sin((pos.x * 3.4) + uTime * 0.75);
    float waveB = cos((pos.y * 4.8) - uTime * 0.55);
    float waveC = sin((pos.x + pos.y) * 6.0 + uTime);
    vWave = (waveA + waveB + waveC) * 0.08;
    pos.z += vWave + smoothstep(0.55, 0.0, mousePull) * 0.26;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const fluidFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  varying vec2 vUv;
  varying float vWave;

  float grain(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  // Color is mixed from three cinematic accent bands. The noise is intentional:
  // it breaks perfectly smooth gradients and gives the light a filmed texture.
  void main() {
    float band = smoothstep(0.05, 0.95, vUv.x + vWave * 1.8);
    float pulse = 0.5 + 0.5 * sin(uTime * 0.7 + vUv.y * 5.0);
    vec3 color = mix(uColorA, uColorB, band);
    color = mix(color, uColorC, pulse * 0.22);
    float vignette = smoothstep(1.0, 0.18, distance(vUv, vec2(0.5)));
    float n = grain(vUv * 420.0 + uTime) * 0.04;
    gl_FragColor = vec4(color * (vignette + 0.1) + n, 0.58);
  }
`;

export const particleVertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  attribute float aSize;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    float drift = sin(uTime * 0.55 + position.x * 0.8 + position.y * 0.35);
    pos.x += drift * 0.08 + (uMouse.x - 0.5) * 0.18;
    pos.y += cos(uTime * 0.45 + position.z) * 0.05 + (uMouse.y - 0.5) * 0.12;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (240.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    vAlpha = smoothstep(14.0, 2.0, length(position));
  }
`;

export const particleFragmentShader = `
  varying float vAlpha;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float d = length(center);
    float glow = smoothstep(0.5, 0.0, d);
    vec3 color = mix(vec3(0.49, 0.91, 1.0), vec3(1.0, 0.78, 0.42), d);
    gl_FragColor = vec4(color, glow * vAlpha * 0.72);
  }
`;
