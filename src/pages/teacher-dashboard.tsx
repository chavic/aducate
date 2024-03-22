import Link from 'next/link';

export default function TeacherDashboard() {
  // Enhanced content for the teacher dashboard with asynchronous data loading
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function fetchCourses() {
      // Replace with actual API call
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    }
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/create-course"><a>Create Course</a></Link></li>
          <li><Link href="/manage-courses"><a>Manage Courses</a></Link></li>
          <li><Link href="/student-progress"><a>View Student Progress</a></Link></li>
          <li><Link href="/upcoming-lessons"><a>View Upcoming Lessons</a></Link></li>
        </ul>
      </nav>
      {/* Display list of courses */}
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}
  // Placeholder content for the teacher dashboard
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      {/* Links to create courses, manage courses, view student progress, etc. */}
    </div>
  );
}
