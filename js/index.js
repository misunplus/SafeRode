$(function() {
	$(window).load(function() {
		$('.loade').delay(1500).fadeOut();
	});

	const $toggleBtn = $('#header > .header-cover > .toggle');
	const $closeBtn = $('#menu-content > .menu-content-cover > nav > .close');
	$toggleBtn.on('click', function() {
		$('#menu-content').animate({
			left: 0
		});
	});
	$closeBtn.on('click', function() {
		$('#menu-content').animate({
			left: -100 + '%'
		});
	});

	// 로그인페이지

	// 링크이동 함수

	const linkMoveFn = function(btnName, moveLink) {
		btnName.on('click', function(evt) {
			let _lnk = moveLink;
			localStorage.setItem('link', window.location.href);
			location.href = _lnk;
			evt.preventDefault();
			console.log('먹긴하는거지..?');
		});
	};

	const $loginSubmit = $(
		'body#index > #wrap > section#login > .login-cover > .service > button.member-signup'
	);
	const $signupLink = './signup.html';
	const $loginBtn = $('.login-submit');
	const $logo = $('#logo');
	const $faGameBtn = $('#gamepad');
	const $faHomeBtn = $('#home');
	const $cancel = $('#cancel');
	const $game = $('#game-play');
	const $quiz = $('#quiz');
	const $quizBtn = $('#main-quiz-btn');
	const $gameBtn = $('#main-game-btn');
	const $memberSubmit = $('#member-submit');
	const $mainLink = './main.html';
	const $gameLink = './game.html';
	const $indexLink = './index.html';
	const $gamePlayLink = './gameplay.html';
	const $quizLink = './quiz.html';
	linkMoveFn($gameBtn, $gamePlayLink);
	linkMoveFn($quizBtn, $quizLink);
	linkMoveFn($logo, $mainLink);
	linkMoveFn($loginBtn, $mainLink);
	linkMoveFn($loginSubmit, $signupLink);
	linkMoveFn($faHomeBtn, $mainLink);
	linkMoveFn($faGameBtn, $gameLink);
	linkMoveFn($memberSubmit, $mainLink);
	linkMoveFn($cancel, $indexLink);
	linkMoveFn($game, $gamePlayLink);
	linkMoveFn($quiz, $quizLink);
});
