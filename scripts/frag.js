const frag = [`
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texcoord;

void main(void)
{

    vec2 uv = v_texcoord;
    uv.y = 1.0 - uv.y;
    
    vec2 pos = 0.5 - uv;
        
    pos.y /= u_resolution.x/u_resolution.y;
    
    float dist = 1.0/length(pos);
    
    dist *= 0.001 * u_time;
    
    dist = pow(dist, 0.8);
    
    vec3 col = dist * vec3(1.0, 0.5, 0.25);
    
    col = 1.0 - exp( -col );
    
    gl_FragColor = vec4(col, 1.0);
}
`]