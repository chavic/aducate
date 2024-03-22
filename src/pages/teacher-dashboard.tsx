import Link from 'next/link';

export default function TeacherDashboard() {
  // Content for the teacher dashboard
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
