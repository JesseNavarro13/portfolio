import { useEffect, useMemo, useState } from 'react'
import './App.css'

const emptyFormState = {
  title: '',
  description: '',
  link: '',
  demoLink: '',
}

function App() {
  const [projects, setProjects] = useState([])
  const [formState, setFormState] = useState(emptyFormState)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [editingId, setEditingId] = useState(null)
  const [editState, setEditState] = useState(emptyFormState)

  const hasProjects = useMemo(() => projects.length > 0, [projects])

  useEffect(() => {
    fetchProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchProjects() {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/projects')
      if (!response.ok) throw new Error('Failed to load projects')
      const data = await response.json()
      setProjects(data)
    } catch (err) {
      setError('Unable to load projects. Is the backend running?')
    } finally {
      setIsLoading(false)
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  async function handleCreateProject(event) {
    event.preventDefault()
    setError(null)

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!response.ok) throw new Error('Create failed')

      const created = await response.json()
      setProjects((prev) => [created, ...prev])
      setFormState(emptyFormState)
    } catch (err) {
      setError('Failed to create project')
    }
  }

  function startEditing(project) {
    setEditingId(project.id)
    setEditState({
      title: project.title || '',
      description: project.description || '',
      link: project.link || '',
      demoLink: project.demoLink || '',
    })
  }

  function cancelEditing() {
    setEditingId(null)
    setEditState(emptyFormState)
  }

  async function saveEdit(id) {
    setError(null)

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editState),
      })

      if (!response.ok) throw new Error('Update failed')

      const updated = await response.json()
      setProjects((prev) => prev.map((p) => (p.id === id ? updated : p)))
      cancelEditing()
    } catch (err) {
      setError('Failed to save changes')
    }
  }

  async function deleteProject(id) {
    const confirmed = window.confirm('Delete this project?')
    if (!confirmed) return

    setError(null)
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Delete failed')

      setProjects((prev) => prev.filter((p) => p.id !== id))
    } catch (err) {
      setError('Failed to delete project')
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboardHeader">
        <h1>Projects Dashboard</h1>
        <p className="subtitle">Add, edit, and delete projects (uses /api/projects)</p>
      </header>

      <section className="panel">
        <h2>Add a project</h2>
        <form className="projectForm" onSubmit={handleCreateProject}>
          <label>
            Title
            <input
              name="title"
              value={formState.title}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={formState.description}
              onChange={handleInputChange}
              rows={3}
              required
            />
          </label>

          <label>
            Link
            <input name="link" value={formState.link} onChange={handleInputChange} />
          </label>

          <label>
            Demo link
            <input
              name="demoLink"
              value={formState.demoLink}
              onChange={handleInputChange}
            />
          </label>

          <div className="formActions">
            <button type="submit" className="primary" disabled={isLoading}>
              Add project
            </button>
          </div>
        </form>
      </section>

      <section className="panel">
        <h2>Projects</h2>

        {error && <div className="error">{error}</div>}
        {isLoading && <div className="empty">Loading...</div>}
        {!isLoading && !hasProjects && (
          <div className="empty">No projects yet. Add one using the form above.</div>
        )}

        {hasProjects && (
          <ul className="projectsList">
            {projects.map((project) => {
              const isEditing = editingId === project.id
              return (
                <li key={project.id} className="projectCard">
                  {isEditing ? (
                    <div className="projectEdit">
                      <label>
                        Title
                        <input
                          value={editState.title}
                          onChange={(e) =>
                            setEditState((prev) => ({ ...prev, title: e.target.value }))
                          }
                        />
                      </label>
                      <label>
                        Description
                        <textarea
                          rows={2}
                          value={editState.description}
                          onChange={(e) =>
                            setEditState((prev) => ({ ...prev, description: e.target.value }))
                          }
                        />
                      </label>
                      <label>
                        Link
                        <input
                          value={editState.link}
                          onChange={(e) =>
                            setEditState((prev) => ({ ...prev, link: e.target.value }))
                          }
                        />
                      </label>
                      <label>
                        Demo link
                        <input
                          value={editState.demoLink}
                          onChange={(e) =>
                            setEditState((prev) => ({ ...prev, demoLink: e.target.value }))
                          }
                        />
                      </label>

                      <div className="cardActions">
                        <button className="primary" onClick={() => saveEdit(project.id)}>
                          Save
                        </button>
                        <button type="button" onClick={cancelEditing}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="projectContent">
                        <div className="projectInfo">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <div className="links">
                            {project.link && (
                              <a href={project.link} target="_blank" rel="noreferrer">
                                Link
                              </a>
                            )}
                            {project.demoLink && (
                              <a href={project.demoLink} target="_blank" rel="noreferrer">
                                Demo
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="cardActions">
                          <button type="button" onClick={() => startEditing(project)}>
                            Edit
                          </button>
                          <button type="button" onClick={() => deleteProject(project.id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}

export default App
