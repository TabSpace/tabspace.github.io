var $dialog = window['spore-ui-dialog'];
console.info('spore-ui-dialog:', $dialog);

$(function() {
	$('#tip-simple').on('click', function() {
		$dialog.tip('显示一段简单信息');
	});
});

$(function() {
	$('#tip-long-text').on('click', function() {
		$dialog.tip(new Array(11).join('一二三四五六七八九十'));
	});
});

$(function() {
	$('#tip-top').on('click', function() {
		$dialog.tip('提示固定在上方', {
			top: '20px'
		});
	});
});

$(function() {
	$('#tip-bottom').on('click', function() {
		$dialog.tip('提示固定在下方', {
			bottom: '20px'
		});
	});
});

$(function() {
	$('#tip-parent').on('click', function() {
		$dialog.tip('提示显示在指定区域范围', {
			parentNode: $('.p-qrbox')
		});
	});
});

