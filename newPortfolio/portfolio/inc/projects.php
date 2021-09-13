<?php
$project = new Projects();
$fourProjects = $project->getFourProject();

?>

<div id="projects" class="projects">
        <div class="projects-header lazyLeft">Ostatnie projekty<span>.</span></div>
        <?php foreach($fourProjects as $p): ?>
            <a href="project.php?pid=<?php echo $p->project_id;?>" class="projects-project lazyUp">
            <div class="projects-project-name"><?php echo $p->project_title;?></div>
            <div class="projects-project-image">
                <img src="./img/pictures/<?php echo $p->project_img;?>">
            </div>
            </a>
        <?php endforeach; ?>
        <a href="projects.php" class="projects-more">
            Więcej projektów
            <svg>
                <use xlink:href="./img/icons/arrow_right_alt_black_24dp.svg#arrow"></use>
            </svg>
        </a>
    </div>