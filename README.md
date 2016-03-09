#PJ2 文档
##1.Tell how to use the system
-	配置:

	本次PJ采用纯前端实现，使用`AngularJS` MVC框架。
	如需调试，需要安装`node.js`,`npm`和`AngularJS`，且需要手动安装 `node_modules`里的包 。理论上，本次PJ上交的代码内容已包含大部分所需配置文件，`node.js`因为需要全局安装、`modules`因为太大（近200MB)所以未包含在内。
- 使用:
	- 启动:
		
		打开 /app/index.html 即可。（使用Chrome打开)
	
	- 操作:
	
		1. 网页左部分是地图，可以通过双击标有字母的红色圆圈（代表地点）来选择起点和终点。（如果之后选择`所有点到终点最短路径`则起点可留空，如果之后选择`所有两点间最短路径`则两者皆可留空）
		
		2. 选择好之后，点击`我要步行`、`我要开车`、`公交优先`中的一个按钮选择交通方式。
		
		3. 选择好交通方式之后，点击`选定两点最短路径`、`所有点到终点最短路径`、`所有两点间最短路径`中的一个按钮来显示路径。对于后两者，不仅会在地图上显示路径，还会导出成 txt 文件。
		
		4. 如果第3步选择`选定两点最短路径`，则地图上会出现绿色路径。如果是其他两个选项，因为路径较多，故不同路径可能会以不同颜色标识以区分。右下角的`textarea`以文本形式显示本次操作的路径。
		
		5.	点击`重置`按钮清除本次操作痕迹。
	
##2.Show that which algorithm is used in each function and why
1.	**Given two locations, show the shortest path from one to the other on the map and its length.**

	对于给定的两点之间的路径，且没有负权，则显然Dijkstra最优。
	
2. **Given one location, show the length of the shortest path to this location from every other location in a text file.**
	
	所有结点到某给定终点的最短路径，Floyd 是 theta(n^3)，而使用二叉堆的Dijkstra 最多也是 (VElgV)，仍然适用。
	
3.  **Just show the length of shortest path from every two locations in a text file.**

	如果采用其他算法，那么剩下Johnson，而Johnson适用于稀疏图，且有可能边有负权的情况，且内部实际也采用了Dijkstra。所以本method仍然采用Dijkstra，对每个点运行一次即可。

##3.creative thoughts
使用MVC框架，灵活使用数据双向绑定。实现了需求文档中“双击某地点选中”的功能。
