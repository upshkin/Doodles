<?php
class DoodleGetListProcessor extends modObjectGetListProcessor {
    public $classKey = 'Doodle';
    public $languageTopics = array('doodles:default');
    public $defaultSortField = 'name';
    public $defaultSortDirection = 'ASC';
    public $objectType = 'doodles.doodle';
}
return 'DoodleGetListProcessor';