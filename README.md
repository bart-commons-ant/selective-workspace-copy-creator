# selective-workspace-copy-creator

Overview
--------

Creates workspace copy with only selected subdirectories. 

Parameters
----------

- workspace.src - Workspace to be copied.
- workspace.dest - Destination workspace (will be deleted if already exist).
- filter.path - Filter file containing selected directories.

Example usage
-------------

	ant -Dworkspace.src=example/foobar -Dworkspace.dest=example/foobar-copy -Dfilter.path=example/foobar/filter.txt
