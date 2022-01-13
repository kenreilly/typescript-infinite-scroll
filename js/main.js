class App {
    static get random_items() {
        return Array.from({ length: 10 }, () => Math.random() * 10);
    }
    static init() {
        debugger;
        App.content_el = document.querySelector('main');
        App.content_el.onscroll = App.on_scroll;
        App.load();
    }
    static load() {
        let items = App.random_items;
        items.forEach((item) => App.append_item(item));
    }
    static append_item(item) {
        let el = document.createElement('div');
        let label = document.createElement('label');
        let span = document.createElement('span');
        label.innerHTML = App.content_el.childElementCount.toString();
        span.innerHTML = item.toString();
        el.append(label);
        el.append(span);
        App.content_el.append(el);
    }
    static on_scroll(event) {
        try {
            let el = event.target;
            let item_height = App.content_el.children[0].clientHeight;
            let distance = el.scrollHeight - (el.scrollTop + el.clientHeight);
            if (distance < (item_height * 2))
                App.load();
        }
        catch (e) { }
    }
}
App.init();
