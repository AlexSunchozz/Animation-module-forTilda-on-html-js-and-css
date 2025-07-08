    const btns = document.querySelectorAll('.tab-btn-click');
    const tabsCount = btns.length;

    const textEls = [...Array(tabsCount)].map((_, i) =>
        document.querySelector(`.tab${i + 1}-text`)
    );

    const shapeEls = [...Array(tabsCount)].map((_, i) =>
        document.querySelector(`.tab${i + 1}-shape`)
    );

    const extraEls = [
        '.tn-elem__7296432961712193474585', // <-- этот нужно перезапускать
        '.tn-elem__7296432961712192192949',
        '.tn-elem__7296432961712192934527',
        '.tn-elem__7296432961712193196052',
    ].map(selector => document.querySelector(selector));

    const tabsWithRestart = [1, 3, 4]; // индексы табов, где нужен перезапуск анимации у extraEls[0]

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => handleTabClick(index));
    });

    function restartAnimation(el) {
        el.classList.remove('t-sbs-anim_reversed');
        void el.offsetWidth; // сброс рендера
        el.classList.add('t-sbs-anim_reversed');
    }

    function handleTabClick(activeIndex) {
        console.log(`Tab clicked: ${activeIndex + 1}`);

        textEls.forEach((el, i) => {
            if (i !== activeIndex) el?.classList.add('t-sbs-anim_reversed');
        });

        shapeEls.forEach((el, i) => {
            if (i !== activeIndex) el?.classList.add('t-sbs-anim_reversed');
        });

        btns.forEach((btn, i) => {
            if (i !== activeIndex) btn.classList.add('t-sbs-anim_reversed');
        });

        extraEls.forEach((el, i) => {
            if (!el) return;

            // Если активный таб — 2, 4 или 5 → перезапуск на extraEls[0]
            if (i === 0 && tabsWithRestart.includes(activeIndex)) {
                restartAnimation(el);
            } else {
                el.classList.add('t-sbs-anim_reversed');
            }
        });
    }
