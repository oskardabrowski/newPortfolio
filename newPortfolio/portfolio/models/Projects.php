<?php

class Projects {
    private $db;
    public function __construct() {
        $this->db = new Database;
    }

    public function getFourProject() {
        $this->db->query('SELECT * FROM projects LIMIT 4');
        $result = $this->db->resultSet();
        return $result;
    }
    public function getAllProject() {
        $this->db->query('SELECT * FROM projects');
        $result = $this->db->resultSet();
        return $result;
    }
    public function getProjectById($id) {
        $this->db->query('SELECT * FROM projects WHERE project_id = :id');
        $this->db->bind(':id', $id);
        $result = $this->db->single();
        return $result;
    }

}



?>