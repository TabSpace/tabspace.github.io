$(function() {

	function showQr() {
		var $qrious = window.QRious;
		var map = {};

		$('.p-qrbox img').each(function() {
			var img = this;
			var addr = $(img).attr('data-qrlink');
			map[addr] = new $qrious({
				element: img,
				value: addr
			});
			console.info('qr addr:', addr);
		});
	}

	function renderQrUrls(urls) {
		urls.forEach(function(url) {
			var html = [
				'<div class="p-qrbox">',
				'<img data-qrlink="' + url + '" class="img-thumbnail"/>',
				'<a href="' + url + '">' + url + '</a>',
				'</div>'
			].join('');
			$(html).prependTo(document.body);
		});
		showQr();
	}

	function setUrl(url) {
		url = url || window.location.href;
		renderQrUrls([url]);
	}

	$.ajax({
		url: '/api/address',
		dataType: 'json',
		success: function(rs) {
			if (rs && rs.url) {
				setUrl(rs.url);
			} else {
				setUrl();
			}
		},
		error: function() {
			setUrl();
		}
	});

});
