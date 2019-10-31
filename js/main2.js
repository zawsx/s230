jQuery(document).ready(function(){/* convert a cubic bezier value to a custom mina easing http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg 	*/
var duration=300,delay=300,epsilon=(1000 / 60 / duration) / 4,firstCustomMinaAnimation=bezier(.42,.03,.77,.63, epsilon),	secondCustomMinaAnimation=bezier(.27,.5,.6,.99, epsilon);
function bezier(x1, y1, x2, y2, epsilon){	//https://github.com/arian/cubic-bezier
var curveX = function(t){var v = 1 - t;	return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;	};
var curveY = function(t){var v = 1 - t;	return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;	};
var derivativeCurveX=function(t){var v=1 - t; return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2; };	
return function(t){var x = t, t0, t1, t2, x2, d2, i; // First try a few iterations of Newton's method -- normally very fast.
	for (t2 = x, i = 0; i < 8; i++){x2 = curveX(t2) - x;if (Math.abs(x2) < epsilon) return curveY(t2);	d2 = derivativeCurveX(t2);if (Math.abs(d2) < 1e-6) break;t2 = t2 - x2 / d2;	}
	t0 = 0, t1 = 1, t2 = x;	if (t2 < t0) return curveY(t0);	if (t2 > t1) return curveY(t1);
	while (t0 < t1){x2 = curveX(t2);if (Math.abs(x2 - x) < epsilon) return curveY(t2);	if (x > x2) t0 = t2;	else t1 = t2;	t2 = (t1 - t0) * .5 + t0;} // Fallback to the bisection method for reliability.
	return curveY(t2);		};	};}); // Failure