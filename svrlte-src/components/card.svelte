<script>
    export let title;
    export let client;
    export let year;
    export let links;
    export let description;
    export let imageSrc;
  </script>
  
  <div class="project-card">
    <div class="project-image">
      <img src={imageSrc} alt={title} />
    </div>
    <div class="project-details">
      <h2>{title}</h2>
      <h3>{client}</h3>
      <h4>{year}</h4>
      <p>{description}</p>
      <div class="project-links">
        {#each links as link}
          <a href={link.url}>{link.title}</a>
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .project-card {
      display: flex;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 20px;
    }
  
    .project-image {
      width: 40%;
      min-width: 200px;
      max-width: 400px;
      padding: 20px;
    }
  
    .project-image img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 8px;
    }
  
    .project-details {
      padding: 20px;
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  
    .project-details h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    .project-details h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #777;
    }
  
    .project-details h4 {
      font-size: 18px;
      margin-bottom: 10px;
      color: #555;
    }
  
    .project-details p {
      font-size: 16px;
      margin-bottom: 10px;
    }
  
    .project-links {
      display: flex;
      flex-wrap: wrap;
    }
  
    .project-links a {
      display: block;
      font-size: 14px;
      padding: 5px;
      margin: 5px;
      background-color: #eee;
      color: #333;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
  
    .project-links a:hover {
      background-color: #ddd;
    }
  </style>  