<?php
/**
 * @file
 * gameshop_image_styles.features.inc
 */

/**
 * Implements hook_image_default_styles().
 */
function gameshop_image_styles_image_default_styles() {
  $styles = array();

  // Exported image style: product_detail_view.
  $styles['product_detail_view'] = array(
    'name' => 'product_detail_view',
    'label' => 'Product detail view',
    'effects' => array(
      1 => array(
        'label' => 'Scale',
        'help' => 'Scaling will maintain the aspect-ratio of the original image. If only a single dimension is specified, the other dimension will be calculated.',
        'effect callback' => 'image_scale_effect',
        'dimensions callback' => 'image_scale_dimensions',
        'form callback' => 'image_scale_form',
        'summary theme' => 'image_scale_summary',
        'module' => 'image',
        'name' => 'image_scale',
        'data' => array(
          'width' => 302,
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: product_list_view.
  $styles['product_list_view'] = array(
    'name' => 'product_list_view',
    'label' => 'Product list view',
    'effects' => array(
      2 => array(
        'label' => 'Resize',
        'help' => 'Resizing will make images an exact set of dimensions. This may cause images to be stretched or shrunk disproportionately.',
        'effect callback' => 'image_resize_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'image_resize_form',
        'summary theme' => 'image_resize_summary',
        'module' => 'image',
        'name' => 'image_resize',
        'data' => array(
          'width' => 212,
          'height' => 245,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
