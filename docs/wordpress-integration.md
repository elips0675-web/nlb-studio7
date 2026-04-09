
# Интеграция с WordPress в Headless-режиме

В этом руководстве описывается, как интегрировать WordPress в качестве Headless CMS в ваш проект, используя его для управления одним типом контента (например, записями блога), в то время как админ-панель на Payload CMS управляет другими данными (например, услугами).

## Что такое Headless WordPress?

Headless WordPress — это использование WordPress исключительно как системы управления контентом (бэкенда), в то время как фронтенд (то, что видят пользователи) построен на другой технологии, в нашем случае — на Next.js.

Данные из WordPress получаются через его встроенный REST API.

## Шаг 1: Настройка WordPress

1.  **Установите WordPress:** У вас должен быть работающий сайт на WordPress. Это может быть как новый сайт, так и уже существующий.
2.  **Включите REST API:** REST API в WordPress включен по умолчанию. Вы можете проверить его доступность, перейдя по адресу `https://ваш-домен.com/wp-json/wp/v2`.
3.  **Создайте контент:** Добавьте несколько записей в раздел "Записи" (Posts), чтобы у вас были данные для проверки.

## Шаг 2: Получение данных из WordPress в Next.js

Теперь вам нужно настроить ваше Next.js приложение (в папке `client`) для получения данных из WordPress.

1.  **Создайте функцию для запросов:**
    В `client/src/lib` (или в другом подходящем месте) создайте файл, например `wordpress.js`, для функций, работающих с WordPress API.

    ```javascript
    // client/src/lib/wordpress.js

    const BASE_URL = 'https://ваш-домен.com/wp-json/wp/v2';

    export async function getPosts() {
      const res = await fetch(`${BASE_URL}/posts`);
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      const posts = await res.json();
      return posts;
    }

    export async function getPost(slug) {
      const res = await fetch(`${BASE_URL}/posts?slug=${slug}`);
      if (!res.ok) {
        throw new Error('Failed to fetch post');
      }
      const post = await res.json();
      return post[0]; // API возвращает массив, даже если пост один
    }
    ```

2.  **Отобразите список записей:**
    Создайте новую страницу, например `client/src/pages/blog/index.js`, чтобы показать список всех записей из блога.

    ```javascript
    // client/src/pages/blog/index.js
    import { getPosts } from '@/lib/wordpress';
    import Link from 'next/link';

    export async function getStaticProps() {
      const posts = await getPosts();
      return { props: { posts }, revalidate: 10 };
    }

    export default function Blog({ posts }) {
      return (
        <div>
          <h1>Блог</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  {post.title.rendered}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    ```

3.  **Отобразите отдельную запись:**
    Создайте динамическую страницу `client/src/pages/blog/[slug].js` для отображения одной записи.

    ```javascript
    // client/src/pages/blog/[slug].js
    import { getPost, getPosts } from '@/lib/wordpress';

    export async function getStaticPaths() {
      const posts = await getPosts();
      const paths = posts.map((post) => ({ params: { slug: post.slug } }));
      return { paths, fallback: 'blocking' };
    }

    export async function getStaticProps({ params }) {
      const post = await getPost(params.slug);
      return { props: { post }, revalidate: 10 };
    }

    export default function Post({ post }) {
      return (
        <div>
          <h1>{post.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      );
    }
    ```

## Шаг 3: Объединение данных

Теперь ваш сайт может одновременно показывать:

*   **Услуги** из админ-панели Payload CMS (как мы настраивали ранее).
*   **Записи блога** из WordPress.

Вы можете создавать страницы, которые смешивают эти данные. Например, на главной странице можно отобразить последние 3 записи из блога и 3 последние услуги.

## Преимущества этого подхода

*   **Лучшее из двух миров:** Вы используете привычный и удобный интерфейс WordPress для написания статей и мощную, гибкую админ-панель Payload для управления структурированными данными.
*   **Производительность:** Ваш фронтенд на Next.js остается очень быстрым, так как он получает только чистые данные, а не рендерит тяжелые темы WordPress.
*   **Гибкость:** Вы не ограничены темами и плагинами WordPress в плане дизайна и функциональности.
