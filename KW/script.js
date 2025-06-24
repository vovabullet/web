document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsSection = document.getElementById('posts');
    const archiveList = document.getElementById('archive-list');

    function addPost(title, author, category, content) {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${title}</h3>
            <p>Автор: ${author}</p>
            <p>Категория: ${category}</p>
            <p>${content}</p>
            <button class="delete">Удалить</button>
            <button class="archive">Архивировать</button>
        `;

        const deleteBtn = article.querySelector('.delete');
        const archiveBtn = article.querySelector('.archive');

        deleteBtn.addEventListener('click', () => {
            article.remove();
        });

        archiveBtn.addEventListener('click', () => {
            const li = document.createElement('li');
            li.textContent = title;
            archiveList.appendChild(li);
            article.remove();
        });

        postsSection.appendChild(article);
    }

    // начальные посты
    addPost("Исследование Млечного Пути", "Астро Фанат", "Астрономия", "Млечный Путь — наша родная галактика, содержащая миллиарды звезд и планет.");
    addPost("SpaceX запускает новый спутник", "Технический репортер", "Космические технологии", "SpaceX успешно запустил новый спутник связи на орбиту.");

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const author = document.getElementById('author').value;
        const category = document.getElementById('category').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (author && category && title && content) {
            addPost(title, author, category, content);
            postForm.reset();
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });
});