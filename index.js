fade_in_tilt=function (element, speed) {
	$(element).css( {
			"transform": "scale(0.1, 0.1)".concat("skewY(").concat((Math.random() * (90) - 45).toFixed(4)).concat(")")
		}

	);

	let fn0=function(i) {
		return setTimeout((function() {
					$.fx.speeds._default=(Math.random() * (1000/speed) + 250/speed);

					$(i).transition( {
							"opacity": "0.8", "transform": "scale( 1, 1)"
						}

					) $.fx.speeds._default=(Math.random() * (500/speed) + 500/speed);

					return $(i).transition( {
							"opacity": "1", "transform": "scale(".concat(+(Math.random() * (1- 0.8) + 0.8).toFixed(4)).concat(",").concat((Math.random() * (1- 0.8) + 0.8).toFixed(4)).concat(") skewY(").concat((Math.random() * (2 + 2) - 3).toFixed(4)).concat(")")
						}

					)
				}

			), (500/(i+5))/speed);
	}

	;
	return fn0(element);
}

fade_out_fold=function (element) {
	$.fx.speeds._default=200;

	$(element).transition( {
			"opacity": "0.7", "transform": "scale(".concat(+(Math.random() * (0.4)).toFixed(4)).concat(",").concat((Math.random() * 0.4).toFixed(4)).concat(") skewX(").concat((Math.random() * (360) - 180).toFixed(4)).concat(")")
		}

	) $.fx.speeds._default=200;
	var a1=(Math.random() * (360) - 180);

	$(element).transition( {
			"opacity": "0.5", "transform": "scale(".concat(+(Math.random() * (0.3)).toFixed(4)).concat(",").concat((Math.random() * 0.3).toFixed(4)).concat(") skewY(").concat((a1).toFixed(4)).concat(")")
		}

	) $.fx.speeds._default=200;

	$(element).transition( {
			"opacity": "0.3", "transform": "scale(".concat(+(Math.random() * (0.2)).toFixed(4)).concat(",").concat((Math.random() * 0.2).toFixed(4)).concat(") skewY(").concat(a1.toFixed(4)).concat(")")
		}

	) $.fx.speeds._default=200;

	$(element).transition( {
			"opacity": "0.0", "transform": "scale(".concat(+"0.00").concat(",").concat(+"0.00").concat(") skewY(").concat(-a1.toFixed(4)).concat(")")
		}

	)
}

fade_out_tv=function(element, speed) {
	$.fx.speeds._default=750/speed;

	$(element).transition( {
			"opacity": "1", "transform": "scale(0.01, 2)"
		}

	);
	$.fx.speeds._default=250/speed;

	$(element).transition( {
			"opacity": "0", "transform": "scale(10, 0.01)"
		}

	);
}

fade_in_no_tilt=function(element, speed) {
	$(element).css( {
			"transform": "scale(0.1, 0.1)".concat("skewY(").concat((Math.random() * (90) - 45).toFixed(4)).concat(")")
		}

	);

	let fn0=function(i) {
		return setTimeout((function() {
					$.fx.speeds._default=(Math.random() * (1000/speed) + 250/speed);

					$(i).transition( {
							"opacity": "0.8", "transform": "scale( 1, 1)"
						}

					) $.fx.speeds._default=(Math.random() * (500/speed) + 500/speed);

					return $(i).transition( {
							"opacity": "1", "transform": "scale( 1, 1)"
						}

					)
				}

			), (500/(i+5))/speed);
	}

	;
	return fn0(element);
}

let div=$("#div_example");
fade_in_tilt(div, 1);
div.click(()=> fade_out_fold(div, 1));
let btn=$("#button_example");
fade_in_no_tilt(btn, 1);
btn.click(()=> fade_out_tv(btn, 1))