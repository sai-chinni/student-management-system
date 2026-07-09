import { useState, useEffect } from "react";
import "./App.css";

// SVG Icon Components for sleek, self-contained UI icons
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const AlertCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
);

const InfoCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

// Color generator for Initials Avatars
const AVATAR_COLORS = [
  "#4f46e5", // Indigo
  "#0ea5e9", // Sky
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#ec4899", // Pink
  "#8b5cf6", // Violet
  "#14b8a6"  // Teal
];

function getAvatarStyle(name) {
  if (!name) return { backgroundColor: "#64748b" };
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
  return { backgroundColor: color };
}

function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0].slice(0, 2).toUpperCase();
}

function App() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [toasts, setToasts] = useState([]);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Initialize Theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load Students
  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch Students from API
  async function fetchStudents() {
    try {
      const response = await fetch("http://127.0.0.1:8000/students");
      if (!response.ok) throw new Error("Failed to load students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
      showToast("Could not retrieve student list from server.", "error");
    }
  }

  // Handle Form Input Change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation error dynamically
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  }

  // Validate form details
  function validateForm() {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    const ageNum = parseInt(formData.age, 10);
    if (!formData.age) {
      errors.age = "Age is required.";
    } else if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
      errors.age = "Please enter a valid age (1-120).";
    }

    if (!formData.course.trim()) {
      errors.course = "Course name is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  // Save (Create or Update) Student
  async function handleSave(e) {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const parsedData = {
      ...formData,
      age: parseInt(formData.age, 10),
    };

    try {
      if (editingId) {
        // Edit existing student
        const response = await fetch(`http://127.0.0.1:8000/students/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedData),
        });

        if (!response.ok) throw new Error("Failed to update student");
        const result = await response.json();
        
        if (result.error) {
          throw new Error(result.error);
        }

        showToast(`${formData.name} updated successfully!`, "success");
        cancelEdit();
      } else {
        // Create new student
        const response = await fetch("http://127.0.0.1:8000/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedData),
        });

        if (!response.ok) throw new Error("Failed to add student");
        const result = await response.json();

        if (result.error) {
          throw new Error(result.error);
        }

        showToast(`${formData.name} registered successfully!`, "success");
        setFormData({
          name: "",
          email: "",
          age: "",
          course: "",
        });
      }
      fetchStudents();
    } catch (error) {
      console.error(error);
      showToast(error.message || "An error occurred. Check connection.", "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Edit action triggers form loading
  function editStudent(student) {
    setEditingId(student.id);
    setFormData({
      name: student.name,
      email: student.email,
      age: student.age.toString(),
      course: student.course,
    });
    setFormErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Cancel edit mode
  function cancelEdit() {
    setEditingId(null);
    setFormData({
      name: "",
      email: "",
      age: "",
      course: "",
    });
    setFormErrors({});
  }

  // Delete Action
  async function confirmDeleteStudent() {
    if (!deleteConfirmId) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/students/${deleteConfirmId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete student");
      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      showToast("Student deleted successfully.", "info");
      fetchStudents();
      // If we are currently editing the deleted student, cancel edit mode
      if (editingId === deleteConfirmId) {
        cancelEdit();
      }
    } catch (error) {
      console.error(error);
      showToast(error.message || "Unable to delete student.", "error");
    } finally {
      setDeleteConfirmId(null);
    }
  }

  // Toast Notification triggers
  function showToast(message, type = "success") {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Automatically clear in 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }

  function removeToast(id) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  // Toggle Theme between Light/Dark
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // Compute stats metrics dynamically
  const totalStudents = students.length;
  const averageAge = totalStudents
    ? Math.round(students.reduce((acc, s) => acc + s.age, 0) / totalStudents)
    : 0;
  const uniqueCourses = new Set(students.map((s) => s.course.trim().toLowerCase())).size;

  // Calculate most popular course
  let topCourse = "None";
  if (totalStudents > 0) {
    const courseCounts = {};
    students.forEach((s) => {
      const course = s.course.trim();
      courseCounts[course] = (courseCounts[course] || 0) + 1;
    });
    let max = 0;
    Object.keys(courseCounts).forEach((c) => {
      if (courseCounts[c] > max) {
        max = courseCounts[c];
        topCourse = c;
      }
    });
  }

  // Search filter applied students list
  const filteredStudents = students.filter((student) => {
    const query = searchQuery.toLowerCase();
    return (
      student.name.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query) ||
      student.course.toLowerCase().includes(query)
    );
  });

  return (
    <div className="app-container fade-in">
      
      {/* Toast Notification Container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            <span className="toast-icon">
              {toast.type === "success" && <CheckCircleIcon />}
              {toast.type === "error" && <AlertCircleIcon />}
              {toast.type === "info" && <InfoCircleIcon />}
            </span>
            <span className="toast-message">{toast.message}</span>
            <button className="toast-close" onClick={() => removeToast(toast.id)}>
              <XIcon />
            </button>
          </div>
        ))}
      </div>

      {/* Navbar Banner */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-logo">A</div>
          <div className="brand-text">
            <h1>Academix</h1>
            <p>Student Management System</p>
          </div>
        </div>
        <div className="actions-nav">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>

      {/* Overview Statistics Panel */}
      <section className="stats-grid">
        <div className="stat-card students">
          <div className="stat-info">
            <span className="stat-label">Total Students</span>
            <span className="stat-value">{totalStudents}</span>
          </div>
          <div className="stat-icon">
            <UsersIcon />
          </div>
        </div>

        <div className="stat-card courses">
          <div className="stat-info">
            <span className="stat-label">Unique Courses</span>
            <span className="stat-value">{uniqueCourses}</span>
          </div>
          <div className="stat-icon">
            <BookIcon />
          </div>
        </div>

        <div className="stat-card age">
          <div className="stat-info">
            <span className="stat-label">Average Age</span>
            <span className="stat-value">{averageAge} <span style={{ fontSize: "14px", fontWeight: "normal", color: "var(--text-muted)" }}>Yrs</span></span>
          </div>
          <div className="stat-icon">
            <CalendarIcon />
          </div>
        </div>

        <div className="stat-card popular">
          <div className="stat-info">
            <span className="stat-label">Top Course</span>
            <span className="stat-value" style={{ fontSize: topCourse.length > 14 ? "18px" : "22px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{topCourse}</span>
          </div>
          <div className="stat-icon">
            <AwardIcon />
          </div>
        </div>
      </section>

      {/* Main Panel Content Split */}
      <main className="dashboard-content">
        
        {/* Left Hand Form Area */}
        <section className="card form-panel">
          <div className="form-header">
            <h2>{editingId ? "Edit Student Details" : "Register Student"}</h2>
            <p>{editingId ? "Modify fields below to update records." : "Add a new student profile to the registry."}</p>
          </div>

          <form className="student-form" onSubmit={handleSave}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input
                id="name"
                className={`form-input ${formErrors.name ? "error" : ""}`}
                type="text"
                placeholder="e.g. John Doe"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <span className="form-error">{formErrors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                className={`form-input ${formErrors.email ? "error" : ""}`}
                type="email"
                placeholder="e.g. john@university.edu"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="form-error">{formErrors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="age">Age</label>
              <input
                id="age"
                className={`form-input ${formErrors.age ? "error" : ""}`}
                type="number"
                placeholder="e.g. 21"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              {formErrors.age && <span className="form-error">{formErrors.age}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="course">Course Name</label>
              <input
                id="course"
                className={`form-input ${formErrors.course ? "error" : ""}`}
                type="text"
                placeholder="e.g. Computer Science"
                name="course"
                value={formData.course}
                onChange={handleChange}
              />
              {formErrors.course && <span className="form-error">{formErrors.course}</span>}
            </div>

            <div className="form-actions">
              {editingId ? (
                <>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={cancelEdit} disabled={isSubmitting}>
                    Cancel
                  </button>
                </>
              ) : (
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  <PlusIcon /> {isSubmitting ? "Adding..." : "Add Student"}
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Right Hand Student Table Area */}
        <section className="list-panel">
          
          <div className="list-header">
            <div className="list-title">
              <h2>Student Records</h2>
              <p>Showing {filteredStudents.length} of {totalStudents} registered students</p>
            </div>
            
            <div className="search-container">
              <span className="search-icon">
                <SearchIcon />
              </span>
              <input
                className="search-input"
                type="text"
                placeholder="Search name, email, course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="table-wrapper">
            {filteredStudents.length > 0 ? (
              <table className="students-table">
                <thead>
                  <tr>
                    <th>Student Info</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th style={{ textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td>
                        <div className="student-info-cell">
                          <div className="avatar" style={getAvatarStyle(student.name)}>
                            {getInitials(student.name)}
                          </div>
                          <div className="student-meta">
                            <span className="student-name">{student.name}</span>
                            <span className="student-email">{student.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="age-text">{student.age}</span>
                      </td>
                      <td>
                        <span className="course-badge">{student.course}</span>
                      </td>
                      <td>
                        <div className="actions-cell" style={{ justifyContent: "flex-end" }}>
                          <button
                            className="btn-icon"
                            onClick={() => editStudent(student)}
                            title="Edit student"
                            aria-label={`Edit ${student.name}`}
                          >
                            <EditIcon />
                          </button>
                          <button
                            className="btn-icon delete"
                            onClick={() => setDeleteConfirmId(student.id)}
                            title="Delete student"
                            aria-label={`Delete ${student.name}`}
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <UsersIcon />
                </div>
                <h3>No student records found</h3>
                <p>
                  {searchQuery
                    ? "Try adjusting your search criteria or clear the query filter."
                    : "Get started by adding a student on the registry form."}
                </p>
                {searchQuery && (
                  <button className="btn btn-secondary" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Delete Confirmation Modal Overlay */}
      {deleteConfirmId && (
        <div className="modal-overlay" onClick={() => setDeleteConfirmId(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Confirm Deletion</h3>
            <p>
              Are you sure you want to delete this student record? This action is permanent and cannot be undone.
            </p>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setDeleteConfirmId(null)}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={confirmDeleteStudent}>
                Delete Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;