#ifdef GL_ES
precision mediump float;
#endif

vec4 circle_at(vec2 origin, float size) {
	vec2 st = gl_FragCoord.xy / u_resolution;
	float pct = distance(st, origin);

	// vec3 circle = vec3(step(pct, size));
	float circle = step(pct, size);

	return vec4(circle, 0.0, 0.0, 1.0);
}

void main(){
    // gl_FragColor = circle_at(vec2(0.5), 0.25);
		gl_FragColor = circle_at(vec2(0.5), mix(0.25, 0.15, sin(u_time)));
}
