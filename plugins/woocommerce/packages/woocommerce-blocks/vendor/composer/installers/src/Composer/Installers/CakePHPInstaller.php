<?php
namespace Composer\Installers;

use Composer\DependencyResolver\Pool;
<<<<<<< HEAD
=======
use Composer\Semver\Constraint\Constraint;
>>>>>>> staging

class CakePHPInstaller extends BaseInstaller
{
    protected $locations = array(
        'plugin' => 'Plugin/{$name}/',
    );

    /**
     * Format package name to CamelCase
     */
    public function inflectPackageVars($vars)
    {
        if ($this->matchesCakeVersion('>=', '3.0.0')) {
            return $vars;
        }

        $nameParts = explode('/', $vars['name']);
        foreach ($nameParts as &$value) {
            $value = strtolower(preg_replace('/(?<=\\w)([A-Z])/', '_\\1', $value));
            $value = str_replace(array('-', '_'), ' ', $value);
            $value = str_replace(' ', '', ucwords($value));
        }
        $vars['name'] = implode('/', $nameParts);

        return $vars;
    }

    /**
     * Change the default plugin location when cakephp >= 3.0
     */
    public function getLocations()
    {
        if ($this->matchesCakeVersion('>=', '3.0.0')) {
            $this->locations['plugin'] =  $this->composer->getConfig()->get('vendor-dir') . '/{$vendor}/{$name}/';
        }
        return $this->locations;
    }

    /**
     * Check if CakePHP version matches against a version
     *
     * @param string $matcher
     * @param string $version
     * @return bool
     */
    protected function matchesCakeVersion($matcher, $version)
    {
<<<<<<< HEAD
        if (class_exists('Composer\Semver\Constraint\MultiConstraint')) {
            $multiClass = 'Composer\Semver\Constraint\MultiConstraint';
            $constraintClass = 'Composer\Semver\Constraint\Constraint';
        } else {
            $multiClass = 'Composer\Package\LinkConstraint\MultiConstraint';
            $constraintClass = 'Composer\Package\LinkConstraint\VersionConstraint';
        }

=======
>>>>>>> staging
        $repositoryManager = $this->composer->getRepositoryManager();
        if (! $repositoryManager) {
            return false;
        }

        $repos = $repositoryManager->getLocalRepository();
        if (!$repos) {
            return false;
        }

<<<<<<< HEAD
        return $repos->findPackage('cakephp/cakephp', new $constraintClass($matcher, $version)) !== null;
=======
        return $repos->findPackage('cakephp/cakephp', new Constraint($matcher, $version)) !== null;
>>>>>>> staging
    }
}
