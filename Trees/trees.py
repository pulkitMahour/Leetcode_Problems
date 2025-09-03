class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def build_binary_tree_without_import(arr):
    if not arr or arr[0] is None:
        return None

    queue = []
    root = TreeNode(arr[0])
    queue.append(root)
    i = 1
    while queue and i < len(arr):
        current_node = queue.pop(0)
        if arr[i] is not None:
            current_node.left = TreeNode(arr[i])
            queue.append(current_node.left)
        i += 1
        if i < len(arr):
            if arr[i] is not None:
                current_node.right = TreeNode(arr[i])
                queue.append(current_node.right)
            i += 1

    return root

def inorderTraversal(root):
    result = []
    stack = []
    current_node = root

    while current_node or stack:
        while current_node:
            stack.append(current_node)
            current_node = current_node.left

        current_node = stack.pop()
        result.append(current_node.val)
        current_node = current_node.right

    return result

def isSameTree(p, q):
    stack = [(p, q)]
    while stack:
        node1, node2 = stack.pop()
        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False
        stack.append((node1.left, node2.left))
        stack.append((node1.right, node2.right))
    return True

def main():
    tree_array = [1, 2, 3, 4, 5, None, 8, None, None, 6, 7, 9]
    root = build_binary_tree_without_import(tree_array)
    print(inorderTraversal(root))

if __name__ == "__main__":
    main()
