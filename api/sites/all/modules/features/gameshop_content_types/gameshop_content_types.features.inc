<?php
/**
 * @file
 * gameshop_content_types.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function gameshop_content_types_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function gameshop_content_types_node_info() {
  $items = array(
    'carousel_slide' => array(
      'name' => t('Carousel slide'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Título'),
      'help' => '',
    ),
    'producto' => array(
      'name' => t('Producto'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Título'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
