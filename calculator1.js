
    function handleButtonClick(buttonValue) {
        if (buttonValue === 'AC') {
            display.value = '';
        } else if (buttonValue === 'DE') {
            display.value = display.value.slice(0, -1);
        } else if (buttonValue === '=') {
            try {
                display.value = eval(display.value) || '';
            } catch {
                display.value = 'Error';
            }
        } else if (buttonValue === '.') {
            if (!display.value.includes('.')) {
                display.value += '.';
            }
        } else {
            display.value += buttonValue;
        }
    }

    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.value);
        });
    });