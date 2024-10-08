import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import frontMatter from "front-matter";
import Navbar from "./views/dashboard/components/navbar";

import Footer from "./views/dashboard/components/Footer";

import { TracingBeam } from "./components/Tracing-bean";

const MarkdownPost = () => {
  const { postName } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(`/posts/${postName}.md`);
      if (response.ok) {
        const text = await response.text();
        const { attributes, body } = frontMatter(text); // Extrae metadatos y contenido
        setMeta(attributes);
        setContent(body);
      } else {
        setContent("Error: This post can't be loaded.");
      }
    };

    fetchMarkdown();
  }, [postName]);

  return (
    <main>
      <Navbar />
      <TracingBeam>
        <div className='prose lg:prose-xl md:mx-auto my-10 mx-5 '>
          {meta.image && (
            <img
              src={meta.image}
              alt={meta.title}
              className='w-full h-auto mb-4'
            />
          )}
          {meta.title && <h1 className='text-4xl font-bold'>{meta.title}</h1>}
          {meta.author && <p className='text-gray-600'>By {meta.author}</p>}
          {meta.date && (
            <p className='text-gray-600'>
              {new Date(meta.date).toLocaleDateString()}
            </p>
          )}
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </TracingBeam>
      <Footer />
    </main>
  );
};

export default MarkdownPost;
