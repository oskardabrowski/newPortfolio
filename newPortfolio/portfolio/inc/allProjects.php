<?php
$project = new Projects();
$fourProjects = $project->getAllProject();

?>


<div class="projects">
        <div class="projects-header">Projekty<span>.</span></div>
        <?php foreach($fourProjects as $p): ?>
            <a href="project.php?pid=<?php echo $p->project_id;?>" class="projects-project">
            <div class="projects-project-name"><?php echo $p->project_title;?></div>
            <div class="projects-project-image">
                <img src="./img/pictures/<?php echo $p->project_img;?>">
            </div>
            </a>
        <?php endforeach; ?>
    </div>