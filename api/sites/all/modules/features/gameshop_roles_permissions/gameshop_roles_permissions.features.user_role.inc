<?php
/**
 * @file
 * gameshop_roles_permissions.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function gameshop_roles_permissions_user_default_roles() {
  $roles = array();

  // Exported role: administrator.
  $roles['administrator'] = array(
    'name' => 'administrator',
    'weight' => 2,
  );

  // Exported role: content manager.
  $roles['content manager'] = array(
    'name' => 'content manager',
    'weight' => 3,
  );

  return $roles;
}
