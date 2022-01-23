const editor = $('.editor');

const quill = new Quill(editor);

// set html content
quill.setHTML = (html) => {
  editor.root.innerHTML = html;
};

// get html content
quill.getHTML = () => {
  return editor.root.innerHTML;
};

// usages
quill.setHTML('<b>Hello my friend</b>');

quill.on('text-change', () => {
    console.log('get html', quill.getHTML());
});
