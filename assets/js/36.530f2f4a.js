(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{428:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("#700. 二叉搜索树中的搜索")]),s._v(" "),t("p",[t("strong",[s._v("描述：")])]),s._v(" "),t("p",[s._v("给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。")]),s._v(" "),t("p",[s._v("例如，")]),s._v(" "),t("p",[s._v("给定二叉搜索树:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("    4\n   / \\\n  2   7\n / \\\n1   3\n")])])]),t("p",[s._v("和值: 2\n你应该返回如下子树:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("  2     \n / \\   \n1   3\n")])])]),t("p",[s._v("在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。")]),s._v(" "),t("p",[t("strong",[s._v("思路：")])]),s._v(" "),t("p",[s._v("首先，BST的性质不要忘：若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。想到的暴力方法就是BFS。")]),s._v(" "),t("p",[s._v("而利用BST的性质，则不难想到用递归求解。或者通过条件判断就行求解。")]),s._v(" "),t("p",[t("strong",[s._v("解答：")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {TreeNode} root\n * @param {number} val\n * @return {TreeNode}\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("searchBST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// if (root === null) return null")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// let queue = []")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// queue.push(root) ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// while(queue.length) {")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   let temp = []")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   for (const node of queue) {")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     if (node.val === val) return node")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     if (node.left) {")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       if (node.left.val === val) return node.left")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       temp.push(node.left)")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     }")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     if (node.right) {")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       if (node.right.val === val) return node.right")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       temp.push(node.right)")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     }")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   }")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   queue = temp")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// return null")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// if (root === null || root.val === val) return root")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val) ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" root\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);