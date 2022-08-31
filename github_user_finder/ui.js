// class manages adding display components for profile and repositories runtime

class UI {
    constructor() {
      this.profile = document.getElementById('profile');
      this.repo = document.getElementById('repos');
    }
  
    // show profile 
    showProfile(user) {   
      this.profile.innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
      `;
    }

    // show details for no data or error in getting data in profile component
    showNoProfile(message){
        this.profile.innerHTML = `
        <div class="card card-body mb-3" id="no-profile">
        ${message}
        </div>
        `
    }

    // show repostiry details 
    showRepos(repos) {
        let output = '';
        repos.forEach(function(repo) {
          output += `
            <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Private: ${repo.private}</span>
            <span class="badge badge-secondary">Default Branch: ${repo.default_branch}</span>
            <span class="badge badge-success">Created on: ${repo.created_at}</span>
                </div>
              </div>
            </div>
          `;
        });
    
        // Output repos
        repo.innerHTML = output;
      }

  }