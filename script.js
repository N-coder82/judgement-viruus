function calculate() {
    let verb = document.getElementById('input').value.trim();
    // Strip anything that isn't letters, numbers, or spaces
    verb = verb.replace(/[^a-zA-Z0-9\s]/g, '');
    // Remove multiple spaces and trim again
    verb = verb.replace(/\s+/g, ' ').trim();
    let result = document.getElementById('result');

    if (verb.slice(-3) !== 'ing') {
        result.textContent = 'Provide a verb ending in -ing.';
        result.className = 'error';
        posthog.capture('error_not_ing', { input: verb });
        return;
    }

    if (verb.toLowerCase() === 'ing') {
        result.textContent = 'Please provide a complete verb, not just "ing".';
        result.className = 'error';
        posthog.capture('error_just_ing', { input: verb });
        return;
    }

    verb = verb.charAt(0).toUpperCase() + verb.slice(1);
    result.textContent = `${verb}, in this economy!?!?`;
    result.className = 'economy-text';
    posthog.capture('successful_verb', { 
        input: verb,
        cleaned_input: verb.replace(/[^a-zA-Z0-9\s]/g, '')
    });
}