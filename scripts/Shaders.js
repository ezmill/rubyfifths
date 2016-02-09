
var WarpShader = function(){
        this.uniforms = THREE.UniformsUtils.merge([
            {
                "texture"  : { type: "t", value: null },
                "mouse"  : { type: "v2", value: null },
                "resolution"  : { type: "v2", value: null },
                "time"  : { type: "f", value: null },
                "warpVal"  : { type: "f", value: null }
            }
        ]);

        this.vertexShader = [

            "varying vec2 vUv;",
            "void main() {",
            "    vUv = uv;",
            "    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
            "}"
        
        ].join("\n");
        
        this.fragmentShader = [
            
            "uniform sampler2D texture;",
            "uniform vec2 resolution;",
            "uniform vec2 mouse;",
            "uniform float time;",
            "uniform float warpVal;",
            "varying vec2 vUv;",

            "float rand(vec2 p)",
            "{",
            "    vec2 n = floor(p/2.0);",
            "     return fract(cos(dot(n,vec2(48.233,39.645)))*375.42); ",
            "}",
            "float srand(vec2 p)",
            "{",
            "     vec2 f = floor(p);",
            "    vec2 s = smoothstep(vec2(0.0),vec2(1.0),fract(p));",
            "    ",
            "    return mix(mix(rand(f),rand(f+vec2(1.0,0.0)),s.x),",
            "           mix(rand(f+vec2(0.0,1.0)),rand(f+vec2(1.0,1.0)),s.x),s.y);",
            "}",
            "float noise(vec2 p)",
            "{",
            "     float total = srand(p/128.0)*0.5+srand(p/64.0)*0.35+srand(p/32.0)*0.1+srand(p/16.0)*0.05;",
            "    return total;",
            "}",

            "void main()",
            "{",
            "    float t = time;",
            "    vec2 warp = vec2(noise(gl_FragCoord.xy+t)+noise(gl_FragCoord.xy*0.5+t*3.5),",
            "                     noise(gl_FragCoord.xy+128.0-t)+noise(gl_FragCoord.xy*0.6-t*2.5))*0.5-0.25;",
            // "    vec2 uv = gl_FragCoord.xy / resolution.xy+warp;",
            "    vec2 mW = warp*vec2(-1.0 * mouse);",
            "    vec2 uv = vUv+mW*sin(time);",
            "    vec4 look = texture2D(texture,uv);",
            "    vec2 offs = vec2(look.y-look.x,look.w-look.z)*vec2(mouse.x*uv.x/10.0, mouse.y*uv.y/10.0);",
            "    vec2 coord = offs+vUv;",
            "    vec4 repos = texture2D(texture, uv);",
            "   if(warpVal > 0.0){",
            "       gl_FragColor = vec4(repos.rgb,1.0);",
            "   } else {",
            "       gl_FragColor = texture2D(texture, vUv);",
            "   }",
            "}"


        
        ].join("\n");
}