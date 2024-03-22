import Link from 'next/link';

export default function StudentDashboard() {
  // Enhanced content for the student dashboard with progress tracking
  const [progress, setProgress] = useState([]);
  useEffect(() => {
    async function fetchProgress() {
      const data = await mockApiService.getProgress();
      setProgress(data);
    }
    fetchProgress();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/courses"><a>View Courses</a></Link></li>
          <li><Link href="/assignments"><a>View Assignments</a></Link></li>
          <li><Link href="/progress"><a>View Progress</a></Link></li>
          <li><Link href="/announcements"><a>Announcements</a></Link></li>
        </ul>
      </nav>
      {/* Display progress */}
      <ul>
        {progress.map(item => (
          <li key={item.courseId}>Course: {item.courseName}, Progress: {item.percentage}%</li>
        ))}
      </ul>
    </div>
  );
}
