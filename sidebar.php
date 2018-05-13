<form action="/" method="get" class="search-form">
    <input placeholder="Search" type="text" name="s" id="search" value="<?php the_search_query(); ?>" />
     <button type="submit" id="searchsubmit" value="" class="search-icon"><i class="fa fa-search fa-lg"></i></button>
</form>




<!-- Category Archive -->

<p style="margin-bottom: 10px; font-size:18px;">Categories</p>

<ul class="cat-list">
    <?php wp_list_categories( array(
        'orderby'    => 'name',
				'title_li' => ''
    ) ); ?>
</ul>

<!-- Yearly Archive -->

<?php $args = array(
	'type'            => 'yearly',
	'limit'           => '',
	'format'          => 'html',
	'before'          => '',
	'after'           => '',
	'show_post_count' => false,
	'echo'            => 1,
	'order'           => 'DESC',
        'post_type'     => 'post'
);

?>
<p style="margin-bottom: 10px;font-size:18px;">Archive</p>
<ul class="arch-list">
<?php wp_get_archives( $args ); ?>
</ul>
