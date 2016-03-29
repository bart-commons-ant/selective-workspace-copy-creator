importClass(java.io.File);
importClass(java.io.FileReader);
importClass(java.io.BufferedReader);
importClass(java.io.FileWriter);
importClass(java.io.BufferedWriter);

var filterPath = attributes.get("filter-path")

var file = new File(filterPath);
fr = new FileReader(file);
br = new BufferedReader(fr);

while (true) {
	var line = br.readLine();
	if (line == null) {
		break;
	}
	self.log('Processing: ' + line);
	
	var copySingleTask = self.project.createTask('copy-single');       
	copySingleTask.setDynamicAttribute('project-name', line);
	copySingleTask.execute();
}

br.close();
