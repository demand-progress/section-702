export function sendFormToActionKit(fields) {
    // iFrame
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.setAttribute('name', 'actionkit-iframe');
    document.body.appendChild(iframe);

    // Form
    const form = document.createElement('form');
    form.style.display = 'none';
    form.setAttribute('action', urls.actionkit);
    form.setAttribute('method', 'post');
    form.setAttribute('target', 'actionkit-iframe');
    document.body.appendChild(form);

    Object.keys(fields).forEach(function(key) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
    });

    form.submit();
}

export function fetchSignatureCounts() {
    const script = document.createElement('script');
    script.async = true;
    script.src = urls.count;
    document.body.appendChild(script);
}

export function onFetchSignatureCounts(data) {
    state.count = data.total.actions;
    render();
}

export const events = {
    list: {},
    on: function(event, callback) {
        if (!this.list[event]) {
            this.list[event] = [];
        }

        this.list[event].push(callback);
    },
    trigger: function(event, data) {
        if (!this.list[event]) {
            return;
        }

        for (let i = 0; i < this.list[event].length; i++) {
            this.list[event][i](data);
        }
    },
};