import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for arrows

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Better Productivity",
      description:
        "Discover 10 actionable tips to boost your productivity and get more done in less time.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 2,
      title: "The Future of Web Development",
      description:
        "Explore the latest trends and technologies shaping the future of web development.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Mastering React Hooks",
      description:
        "Learn how to use React Hooks effectively to build modern and efficient React applications.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 4,
      title: "Understanding CSS Grid",
      description:
        "A comprehensive guide to mastering CSS Grid for modern web layouts.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 5,
      title: "JavaScript Best Practices",
      description:
        "Learn the best practices for writing clean and efficient JavaScript code.",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      id: 6,
      title: "Getting Started with Tailwind CSS",
      description:
        "A beginner's guide to using Tailwind CSS for rapid UI development.",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // Number of posts to display per page

  // Calculate the current posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Total number of pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return; // Prevent out-of-bounds
    setCurrentPage(pageNumber);
  };

  return (
    <section className="bg-purple-50 py-12 px-4 sm:px-8 lg:px-16 rounded-2xl mb-6">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 text-gray-800">
          Our Blog
        </h2>
        <span className="block h-1 w-25 bg-blue-600 rounded-full mx-auto mb-8"></span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Pagination */}
        <div className="flex justify-center items-center mt-12 space-x-2">
          {/* Left Arrow Button */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`w-10 h-10 flex items-center justify-center rounded ${
                currentPage === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Right Arrow Button */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
