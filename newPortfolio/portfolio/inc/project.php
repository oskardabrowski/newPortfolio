<?php

if(isset($_GET['pid'])) {
    $id = $_GET['pid'];
} else {
    $id = 1;
}

$project = new Projects();
$p = $project->getProjectById($id);
$pz = explode(",", $p->project_technologies);

?>

<div class="project">
        <div class="project-header"><?php echo $p->project_title;?><span>.</span></div>
        <div class="project-img">
            <img src="./img/pictures/<?php echo $p->project_img;?>">
        </div>
        <div class="project-see">
            <a href="<?php echo $p->project_git;?>">
                <svg style="fill: white;">
                    <use xlink:href="./img/icons/github.svg#github">
                </svg>
                Zobacz kod na GitHub
            </a>
            <a href="<?php echo $p->project_web;?>">
                <svg style="fill: white;">
                    <use xlink:href="./img/icons/public_black_24dp.svg#public">
                </svg>
                Zobacz stronę
            </a>
        </div>
        <div class="project-technologies">
            <div class="project-headerSmall">Wykorzystane technologie<span>.</span></div>
            <div class="project-technologies-elements">
                <?php foreach($pz as $pz): ?>
                <div class="project-technologies-elements-element" colorOfSVG="#DD4B25">
                    <svg>
                        <use xlink:href="./img/icons/<?php echo $pz;?>"></use>
                    </svg>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="project-headerSmall">Opis<span>.</span></div>
        <div class="project-desc"><?php echo $p->project_desc;?></div>
        <div class="project-headerSmall">Grafika poglądowa<span>.</span></div>
        <div class="project-rwd">
            <img src="./img/pictures/<?php echo $p->project_bigimg;?>">
        </div>
    </div>