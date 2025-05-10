import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";
import Link from "next/link";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Improve Parent-Teacher Communication",
    excerpt: "Effective communication between parents and teachers is crucial for student success. Here are five strategies to enhance this vital relationship.",
    date: "April 12, 2023",
    author: "Sarah Johnson",
    category: "Communication",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Education Technology in 2023",
    excerpt: "Technology continues to transform the educational landscape. Discover the emerging trends that will shape education technology in the coming year.",
    date: "March 28, 2023",
    author: "Michael Chen",
    category: "Technology",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Streamlining Administrative Tasks for School Leaders",
    excerpt: "School administrators often juggle multiple responsibilities. Learn how to optimize administrative workflows to focus more on educational leadership.",
    date: "March 15, 2023",
    author: "Rachel Williams",
    category: "Administration",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Building a Data-Driven School Culture",
    excerpt: "Data can provide valuable insights for educational improvement. Explore how to foster a culture that effectively uses data for decision-making.",
    date: "February 22, 2023",
    author: "David Thompson",
    category: "Data & Analytics",
    readTime: "7 min read"
  }
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Educite</title>
        <meta
          name="description"
          content="Educational insights, tips, and resources from Educite"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <SectionTitle
          pretitle="Our Blog"
          title="Insights & Resources">
          Explore our latest articles on education management, technology, and best practices for schools.
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center py-8">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
            Load More Articles
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
}
