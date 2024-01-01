import { useState } from 'react';

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('coverImage', coverImage);
  
        const response = await fetch('/api/news', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
            console.log('News posted successfully!');
            // You can redirect, display a success message, or perform any other action.
          } else {
            console.error('Failed to post news.');
          }
        } catch (error) {
          console.error('Error posting news:', error);
        }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Cover Image:
        <input type="file" accept="image/*" onChange={(e) => setCoverImage(e.target.files[0])} />
      </label>
      <br />
      <button type="submit">Post News</button>
    </form>
  );
};

export default NewsForm;