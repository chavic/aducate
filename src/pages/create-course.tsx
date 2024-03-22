import { useState } from 'react';
import Link from 'next/link';

export default function CreateCourse() {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  // Add more state variables as needed for course creation form

  const handleCreateCourse = async (event: React.FormEvent) => {
    event.preventDefault();
    // Placeholder for course creation logic
    // This should send the course data to the backend to create a new course
    console.log('Creating course:', courseName, courseDescription);
  };

  return (
    <div>
      <h1>Create a New Course</h1>
      <form onSubmit={handleCreateCourse}>
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <textarea
          placeholder="Course Description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
        {/* Add more form fields as needed */}
        <button type="submit">Create Course</button>
      </form>
      <Link href="/teacher-dashboard"><a>Back to Dashboard</a></Link>
    </div>
  );
}
