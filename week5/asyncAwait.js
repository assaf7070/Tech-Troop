
//Ex1

// Given Promise-based code:
async function getUserById(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const user = await response.json();
        console.log(`Found user: ${user.name} (${user.email})`);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return null;
    }
}

//Ex2

// Starter code structure:
async function getUserWithPosts(userId) {
    // Your implementation here
    // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
    // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
    // 3. Return combined data

    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`

    try {
        const userResponse = await fetch(userUrl);
        if (!userResponse.ok) throw new Error(`User ${userId} not found`);
        const user = await userResponse.json();

        const postsResponse = await fetch(postsUrl);
        if (!postsResponse.ok) throw new Error(`Failed to fetch posts for user ${userId}`);
        const posts = await postsResponse.json();

        return { user, posts };
    } catch (err) {
        console.error("Error:", err.message);
        throw err;
    }
}

// getUserWithPosts(1)
//   .then(data => console.log(data))
//   .catch(err => console.log("Caught error:", err.message));

//Ex3

async function createDashboard() {
    const usersUrl = `https://jsonplaceholder.typicode.com/users`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts`;
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments`;

    try {
        // Parallel fetch
        const [usersRes, postsRes, commentsRes] = await Promise.all([
            fetch(usersUrl),
            fetch(postsUrl),
            fetch(commentsUrl)
        ]);

        if (!usersRes.ok || !postsRes.ok || !commentsRes.ok) {
            throw new Error("Failed to fetch one or more resources");
        }

        const [users, posts, comments] = await Promise.all([
            usersRes.json(),
            postsRes.json(),
            commentsRes.json()
        ]);

        const totalUsers = users.length;
        const totalPosts = posts.length;
        const totalComments = comments.length;
        const avgPostsPerUser = totalPosts / totalUsers;
        const avgCommentsPerPost = totalComments / totalPosts;

        // Count posts and comments per user
        const userStats = users.map(user => {
            const userPosts = posts.filter(p => p.userId === user.id);
            const userComments = userPosts.reduce((sum, post) => {
                return sum + comments.filter(c => c.postId === post.id).length;
            }, 0);

            return {
                name: user.name,
                postCount: userPosts.length,
                commentCount: userComments
            };
        });

        // Top 3 users by post count
        const topUsers = userStats.sort((a, b) => b.postCount - a.postCount).slice(0, 3);

        // Last 5 posts by highest ID
        const recentPosts = [...posts]
            .sort((a, b) => b.id - a.id)
            .slice(0, 5);

        return {
            summary: {
                totalUsers,
                totalPosts,
                totalComments,
                avgPostsPerUser,
                avgCommentsPerPost
            },
            topUsers,
            recentPosts
        };

    } catch (err) {
        console.error("Dashboard error:", err.message);
        throw err;
    }
}

createDashboard()
    .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(err => console.log("Caught error:", err.message));



