export const routes = {
    home: "/",
    signup: "signup",
    signin: "signin",
    account: "account",
    projects: "projects",
    project: projectId => projectId ? `/projects/${projectId}` : '/projects/:projectId',
    admin: {
        users: "/admin/users",
    }
}