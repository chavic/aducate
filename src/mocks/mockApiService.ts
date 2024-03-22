// This is a mock API service to simulate backend responses for RBAC

export const mockApiService = {
  authenticate: async (username: string, password: string) => {
    // Simulate authentication by checking if the username includes 'teacher' or 'student'
    if (username.includes('teacher')) {
      return { userType: 'teacher' };
    } else if (username.includes('student')) {
      return { userType: 'student' };
    } else {
      throw new Error('Authentication failed');
    }
  },
  // Add more mock API methods as needed
};
