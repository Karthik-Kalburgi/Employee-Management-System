const employees = [
  {
    employees: [
      {
        id: "E001",
        email: "employee1@example.com",
        password: "123",
        tasks: [
          {
            task_title: "Complete Report",
            task_description: "Prepare the monthly performance report.",
            task_date: "2024-12-01",
            category: "Reporting",
            active: true,
            new_task: true,
            completed: false,
            failed: false,
          },
          {
            task_title: "Attend Meeting",
            task_description: "Attend the project planning meeting at 2 PM.",
            task_date: "2024-12-02",
            category: "Meeting",
            active: true,
            new_task: true,
            completed: false,
            failed: false,
          },
          {
            task_title: "Email Client",
            task_description: "Send project update to the client.",
            task_date: "2024-12-03",
            category: "Communication",
            active: false,
            new_task: false,
            completed: true,
            failed: false,
          },
        ],
      },
      {
        id: "E002",
        email: "employee2@example.com",
        password: "123",
        tasks: [
          {
            task_title: "Update Database",
            task_description:
              "Update the customer database with the new details.",
            task_date: "2024-12-01",
            category: "Data Entry",
            active: true,
            new_task: true,
            completed: false,
            failed: false,
          },
          {
            task_title: "Test New Features",
            task_description: "Test the new features in the beta version.",
            task_date: "2024-12-04",
            category: "Testing",
            active: true,
            new_task: true,
            completed: false,
            failed: false,
          },
          {
            task_title: "Prepare Presentation",
            task_description: "Create a presentation for the upcoming pitch.",
            task_date: "2024-12-06",
            category: "Design",
            active: false,
            new_task: false,
            completed: true,
            failed: false,
          },
        ],
      },
      {
        id: "E003",
        email: "employee3@example.com",
        password: "123",
        tasks: [
          {
            task_title: "Design Logo",
            task_description: "Design a new logo for the upcoming product.",
            task_date: "2024-12-01",
            category: "Design",
            active: true,
            new_task: true,
            completed: false,
            failed: false,
          },
          {
            task_title: "Fix Bug",
            task_description: "Fix the critical bug reported by the QA team.",
            task_date: "2024-12-03",
            category: "Development",
            active: true,
            new_task: true,
            completed: false,
            failed: false,
          },
        ],
      },
      {
        id: "E004",
        email: "employee4@example.com",
        password: "123",
        tasks: [
          {
            task_title: "Create User Manual",
            task_description: "Create a user manual for the new product.",
            task_date: "2024-12-02",
            category: "Documentation",
            active: true,
            new_task: true,
            completed: false,
            failed: false,
          },
          {
            task_title: "Organize Files",
            task_description:
              "Organize project files and folders on the server.",
            task_date: "2024-12-05",
            category: "Organization",
            active: true,
            new_task: false,
            completed: true,
            failed: false,
          },
        ],
      },
      {
        id: "E005",
        email: "employee5@example.com",
        password: "123",
        tasks: [
          {
            task_title: "Client Follow-up",
            task_description:
              "Follow up with the client about the project status.",
            task_date: "2024-12-03",
            category: "Communication",
            active: true,
            new_task: true,
            completed: false,
            failed: false,
          },
          {
            task_title: "Generate Invoice",
            task_description:
              "Generate and send the invoice for the last project.",
            task_date: "2024-12-04",
            category: "Finance",
            active: true,
            new_task: true,
            completed: false,
            failed: false,
          },
        ],
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
