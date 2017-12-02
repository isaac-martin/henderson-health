<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title><?php wp_title( '-', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php wp_head(); ?>
<script>
  var templateDir = "<?php echo get_template_directory_uri(); ?>";
</script>
</head>
<body <?php body_class(); ?>>
  <div id="page">
    <div id="wrap-header" class="wrap-header">
      <header id="masthead" class="site-header">
        <a class="home-logo" href="<?php echo get_bloginfo('url'); ?>">
          <img src="<?php bloginfo('template_directory'); ?>/imgs/logo.png" class="header-logo" />
        </a>
      <?php  if ( is_user_logged_in() ) { ?>
        <button id="responsive-menu-toggle"><span></span><span></span><span></span></button>
        <nav id="site-navigation" class="site-navigation">
          <div id="responsive-menu"><?php wp_nav_menu( array( 'theme_location' => 'header', 'menu_id' => 'menu-header', 'menu_class' => 'menu-inline' ) ); ?></div>
        </nav>
      <?php } ?>
      </header>
    </div>
