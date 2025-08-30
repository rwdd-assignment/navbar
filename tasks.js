/**
 * Task Management
 * Handles task actions like pinning, deleting and access control
 */

/**
 * handle pinning tasks
 */
function handlePinTask(taskItem) {
    if (!taskItem) return;
    
    const workspaceItem = taskItem.closest('.workspace-item');
    const submenu = workspaceItem.querySelector('.workspace-submenu');
    
    // move task to top of submenu
    submenu.insertBefore(taskItem, submenu.firstChild);
    
    console.log('Task pinned to top');
}

/**
    * handle deleting tasks
 */
function handleDeleteTask(taskItem) {
    if (!taskItem) return;
    
    if (confirm('Are you sure you want to delete this task?')) {
        taskItem.remove();
        console.log('Task deleted');
    }
}

/**
 * handle inviting members 
 */
function handleInviteMember(workspaceItem) {
    console.log('Invite member functionality - placeholder');
    alert('Invite member functionality would be implemented here');
}

/**
 * handle granting access 
 */
function handleGrantAccess(taskItem) {
    console.log('Grant access functionality - placeholder');
    alert('Grant access functionality would be implemented here');
}

// export to other file
window.handlePinTask = handlePinTask;
window.handleDeleteTask = handleDeleteTask;
window.handleInviteMember = handleInviteMember;
window.handleGrantAccess = handleGrantAccess;
