

var calculate = function(){
	var amount = $('.auto .amount').val();
	var term = $('.auto .term').val();
	var rate = $('.auto .rate').val();

	var loan_info_original = $.loanInfo({
		'amount': amount,
		'term': term,
		'rate': rate
	});

	var loan_info_new = $.loanInfo({
		'amount': amount,
		'term': term,
		'rate': ( rate - 1 < 2 ? 2 : rate - 1 )
	});

	var interest_savings = loan_info_original.total_interest - loan_info_new.total_interest;

	$('.results').html( 'Congratulations! You can save up to <span>$'+interest_savings.toFixed(2)+'</span>' );
}


$(function(){

	$(".auto .amount, .auto .term, .auto .rate").on('keyup change', function(){
		calculate();
	});


	$(".numbers-only").keyup(function(){
		var fixed=$(this).val().replace(/[^0-9.]/g,"");
		$(this).val( fixed );
	});

	calculate();

});

