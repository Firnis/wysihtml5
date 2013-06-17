module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				files: [{
					src: [
						'src/wysihtml5.js', 
						'lib/rangy/rangy-core.js', 
						'lib/base/base.js', 
						'src/browser.js', 
						'src/lang/array.js', 
						'src/lang/dispatcher.js', 
						'src/lang/object.js', 
						'src/lang/string.js', 
						'src/dom/auto_link.js', 
						'src/dom/class.js', 
						'src/dom/contains.js', 
						'src/dom/convert_to_list.js', 
						'src/dom/copy_attributes.js', 
						'src/dom/copy_styles.js', 
						'src/dom/delegate.js', 
						'src/dom/get_as_dom.js', 
						'src/dom/get_parent_element.js', 
						'src/dom/get_style.js', 
						'src/dom/has_element_with_tag_name.js', 
						'src/dom/has_element_with_class_name.js', 
						'src/dom/insert.js', 
						'src/dom/insert_css.js', 
						'src/dom/observe.js', 
						'src/dom/parse.js', 
						'src/dom/remove_empty_text_nodes.js', 
						'src/dom/rename_element.js', 
						'src/dom/replace_with_child_nodes.js', 
						'src/dom/resolve_list.js', 
						'src/dom/sandbox.js', 
						'src/dom/set_attributes.js', 
						'src/dom/set_styles.js', 
						'src/dom/simulate_placeholder.js', 
						'src/dom/text_content.js', 
						'src/quirks/clean_pasted_html.js', 
						'src/quirks/ensure_proper_clearing.js', 
						'src/quirks/get_correct_inner_html.js', 
						'src/quirks/redraw.js', 
						'src/selection/selection.js', 
						'src/selection/html_applier.js', 
						'src/commands.js', 
						'src/commands/bold.js', 
						'src/commands/createLink.js', 
						'src/commands/fontSize.js', 
						'src/commands/foreColor.js', 
						'src/commands/formatBlock.js', 
						'src/commands/formatInline.js', 
						'src/commands/insertHTML.js', 
						'src/commands/insertImage.js', 
						'src/commands/insertLineBreak.js', 
						'src/commands/insertOrderedList.js', 
						'src/commands/insertUnorderedList.js', 
						'src/commands/italic.js', 
						'src/commands/justifyCenter.js', 
						'src/commands/justifyLeft.js', 
						'src/commands/justifyRight.js', 
						'src/commands/justifyFull.js', 
						'src/commands/redo.js', 
						'src/commands/underline.js', 
						'src/commands/undo.js', 
						'src/undo_manager.js', 
						'src/views/view.js', 
						'src/views/composer.js', 
						'src/views/composer.style.js', 
						'src/views/composer.observe.js', 
						'src/views/synchronizer.js', 
						'src/views/textarea.js', 
						'src/toolbar/dialog.js', 
						'src/toolbar/speech.js', 
						'src/toolbar/toolbar.js', 
						'src/editor.js'
					],
					dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
				}]
			}
		},
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n' + 
					' * Name: <%= pkg.name %> <%= pkg.version %>\n' +
					' * Author: <%= pkg.author %>\n' +
					'*/\n'
			},
			build: {
				files: [{
					src: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
					dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.js',
				}]
			}
		},
		sed: {
			version: {
				path: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
				pattern: '@VERSION',
				replacement: '<%= pkg.version %>'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sed');

	grunt.registerTask('default', ['concat', 'sed', 'uglify']);

};